import Box from 'components/Box';
import Flex from 'components/Flex';
import { H1, Label, P } from 'components/Text';
import { GetServerSideProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { getPrayerByID } from 'services/prayer';
import { Prayer, User } from 'types';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { calculateDistance, formatDistance } from 'helpers/geo';
import { Meta } from 'components';
import meta from 'config/metas/common.json';

function getPrayerBG(prayer: string) {
  switch (prayer) {
    case 'janazah':
      return 'maghrib';
    default:
      return prayer;
  }
}

const UserItem = ({ user }: { user: Partial<User> }) => (
  <Flex
    flexDirection="column"
    alignItems="center"
    mt={10}
    mr={18}
    maxWidth={100}
  >
    <Flex justifyContent="center">
      <Image
        src={`/assets/${user.gender === 'M' ? 'man' : 'woman'}-avatar.png`}
        width={64}
        height={64}
        alt="avatar"
      />
    </Flex>
    <Flex justifyContent="center">
      <P mt={5} fontSize={14} textAlign="center" color="#000">
        {user.full_name}
      </P>
    </Flex>
  </Flex>
);

export default function PrayerDetails(props: Prayer) {
  const {
    prayer,
    location,
    inviter,
    participants,
    guests_male,
    guests_female,
    schedule_time,
    description,
    place_name,
  } = props;
  const { t, lang } = useTranslation();
  const PRAYERS = t('common:PRAYERS', {}, { returnObjects: true });

  const [position, setPosition] = useState<{ lat: number; lng: number }>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    // adjust dayjs locale accordingly
    (async () => {
      let module = '';
      switch (lang) {
        case 'tw':
        case 'cn':
          module = `zh-${lang}`;
          break;
        default:
          module = lang;
      }
      await import(`dayjs/locale/${module}.js`);
      dayjs.locale(module);
    })();
  }, []);

  const prayerHeader = t('prayer:HEADER', {
    prayer: PRAYERS[props.prayer],
  });
  const metaDesc = t('prayer:NEW_PRAYER', {
    user: inviter.full_name,
    prayer: PRAYERS[props.prayer],
  });

  return (
    <Flex
      minHeight={['100vh', '100vh', '100vh', 'unset']}
      height={['100%', '100%', '100%', '100vh']}
      overflow={['unset', 'unset', 'unset', 'hidden']}
      width="100%"
      flexDirection={[
        'column-reverse',
        'column-reverse',
        'column-reverse',
        'row',
      ]}
    >
      <Meta
        title={`Wahdapp | ${prayerHeader}`}
        meta={[
          ...meta[lang].meta,
          {
            property: 'og:title',
            content: `Wahdapp | ${prayerHeader}`,
          },
          {
            property: 'description',
            content: metaDesc,
          },
          {
            property: 'og:description',
            content: metaDesc,
          },
        ]}
        link={meta[lang].link}
        image={`/assets/prayer/${getPrayerBG(prayer)}.jpg`}
      />
      <Flex
        width={['100%', '100%', '100%', '50%']}
        overflow="auto"
        px={[20, 35, 40, 45]}
        py={[45, 50, 55, 60]}
        flexDirection="column"
      >
        <Flex
          as="section"
          flexDirection="column"
          alignItems="flex-start"
          pb={40}
        >
          <Link href="/">
            <Label
              as="a"
              href="/"
              fontSize={25}
              fontWeight="bold"
              textAlign="center"
              mb={20}
              fontFamily="Sen"
              color="#6dc7b0"
            >
              Wahdapp
            </Label>
          </Link>
          <H1 fontSize={[30, 30, 40, 54]} color="#545454" mb={8}>
            {t('prayer:HEADER', { prayer: PRAYERS[props.prayer] })}
          </H1>
          <P color="#625657" fontSize={16}>
            {dayjs(schedule_time).format('MMM DD')} •{' '}
            {dayjs(schedule_time).format('hh:mm A')}
            {position &&
              ` • ${formatDistance(calculateDistance(location, position), t)}`}
          </P>
        </Flex>

        {place_name?.length ? (
          <Flex as="section" flexDirection="column" pb={40}>
            <Label mb={10} color="#7C7C7C" fontWeight="bold" fontSize={18}>
              {t('prayer:PLACE')}
            </Label>
            <P color="#7C7C7C" fontSize={16} lineHeight={1.5}>
              {place_name}
            </P>
          </Flex>
        ) : null}
        {description?.length ? (
          <Flex as="section" flexDirection="column" pb={40}>
            <Label mb={10} color="#7C7C7C" fontWeight="bold" fontSize={18}>
              {t('prayer:DESCRIPTION')}
            </Label>
            <P
              color="#7C7C7C"
              fontSize={16}
              lineHeight={1.5}
              style={{ whiteSpace: 'pre-line' }}
            >
              {description}
            </P>
          </Flex>
        ) : null}
        <Flex as="section" flexDirection="column" pb={40}>
          <Label mb={10} color="#7C7C7C" fontWeight="bold" fontSize={18}>
            {t('prayer:ORGANIZER')}
          </Label>
          <Flex>
            <UserItem user={inviter} />
          </Flex>
        </Flex>
        {participants.length ? (
          <Flex as="section" flexDirection="column" pb={40}>
            <Label mb={10} color="#7C7C7C" fontWeight="bold" fontSize={18}>
              {t('prayer:PARTICIPANTS')}
            </Label>
            <Flex flexWrap="wrap">
              {participants.map((participant, i) => (
                <UserItem key={i} user={participant} />
              ))}
            </Flex>
          </Flex>
        ) : null}
        {guests_male + guests_female > 0 ? (
          <Flex as="section" flexDirection="column" pb={40}>
            <Label mb={10} color="#7C7C7C" fontWeight="bold" fontSize={18}>
              {t('prayer:GUESTS')} ({guests_male + guests_female})
            </Label>
            <Flex flexWrap="wrap">
              {[
                ...new Array(guests_male).fill('M'),
                ...new Array(guests_female).fill('F'),
              ].map((guest, i) => (
                <UserItem
                  key={i}
                  user={{ gender: guest, full_name: 'Guest' }}
                />
              ))}
            </Flex>
          </Flex>
        ) : null}
      </Flex>
      <Box
        width={['100%', '100%', '100%', '50%']}
        height={['30vh', '30vh', '30vh', 'unset']}
      >
        <iframe
          src={`https://maps.google.com/maps?q=${props.location.lat}, ${props.location.lng}&z=15&output=embed`}
          frameBorder="0"
          style={{ border: 'none', width: '100%', height: '100%' }}
        ></iframe>
      </Box>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const prayerDetails = await getPrayerByID(ctx.query.id as string);

    return {
      props: prayerDetails,
    };
  } catch (e) {
    ctx.res.writeHead(301, { Location: '/' });
    ctx.res.end();
  }
};
