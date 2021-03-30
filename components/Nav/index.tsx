import { useState } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import styled from 'styled-components';
import Box from 'components/Box';
import Flex from 'components/Flex';
import { Label } from 'components/Text';

const DesktopNav = styled.nav`
  @media screen and (max-width: 1024px) {
    display: none;
  }
  width: 100%;
  position: absolute;
  z-index: 1;
`;

const Li = styled.li`
  list-style: none;
`;

const ListItem = styled.a<{ active?: boolean }>`
  height: 24px;
  opacity: 0.8;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  color: #ffffff;
  transition: 0.4s;
  margin-left: 20px;

  ${(props) => props.active && 'opacity: 1;'}

  &:hover {
    opacity: 1;
  }
`;

const MenuButton = styled.a<{ active?: boolean }>`
  @media screen and (min-width: 1024px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 17px;
  right: 0;

  span:nth-child(1),
  span:nth-child(2),
  span:nth-child(3) {
    transition: 0.2s;
    position: relative;
    display: block;
    width: 20px;
    height: 2px;
    border-radius: 5px;
    background-color: #fff;
  }

  span:nth-child(2) {
    background-color: transparent;
  }

  span:nth-child(2):after,
  span:nth-child(2):before {
    content: '';
    position: absolute;
    transition: 0.2s;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  ${(props) =>
    props.active &&
    `
    span:nth-child(1),
    span:nth-child(3) {
      width: 0;
    }
    span:nth-child(2) {
      &:after {
        transform: rotate(45deg);
      }
      &:before {
        transform: rotate(-45deg);
      }
    }
  `}
`;

const MobileMenu = styled.div<{ active?: boolean }>`
  @media screen and (min-width: 1024px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.5s;
  z-index: 10;
  position: fixed;
  line-height: 1.2;
  overflow: hidden;
  width: 100%;
  height: 0;
  opacity: 0;
  background-image: linear-gradient(136deg, #12967a, #6dc7b0 101%);

  a {
    text-shadow: 0 2px 24px rgba(0, 0, 0, 0.3);
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.12px;
    color: #ffffff;
    text-align: center;
    display: block;
    margin-bottom: 20px;
  }

  ${(props) =>
    props.active &&
    `
    height: 100vh;
    opacity: 0.95;
  `}
`;

function Navigation() {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useRouter();

  return (
    <>
      <DesktopNav>
        <Flex
          justifyContent="space-between"
          width="100%"
          maxWidth={['90%', '90%', 960]}
          margin="0 auto"
          pt={100}
        >
          <Link href="/">
            <Label
              as="a"
              href="/"
              fontSize={24}
              fontWeight="bold"
              color="#ffffff"
              fontFamily="Sen"
            >
              Wahdapp
            </Label>
          </Link>
          <Flex as="ul" justifyContent="space-between">
            <Li>
              <ListItem
                href="https://www.paypal.me/abdullahcheng"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('common:NAV.DONATE')}
              </ListItem>
            </Li>
            <Li>
              <ListItem href="mailto:support@wahd.app">
                {t('common:NAV.CONTACT')}
              </ListItem>
            </Li>
            <Li>
              <Link href="/faq">
                <ListItem href="/faq" active={pathname === 'faq'}>
                  {t('common:NAV.FAQ')}
                </ListItem>
              </Link>
            </Li>
          </Flex>
        </Flex>
      </DesktopNav>
      <Box
        position="relative"
        width="100%"
        zIndex={99}
        maxWidth="90%"
        m="0 auto"
      >
        <MenuButton
          active={isActive}
          onClick={() => setIsActive((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </MenuButton>
      </Box>
      <MobileMenu active={isActive}>
        <Link href="/">
          <Label
            as="a"
            href="/"
            fontSize={25}
            fontWeight="bold"
            textAlign="center"
            mb={20}
            fontFamily="Sen"
          >
            Wahdapp
          </Label>
        </Link>
        <Label
          as="a"
          fontSize={25}
          fontWeight="bold"
          textAlign="center"
          mb={20}
          href="https://www.paypal.me/abdullahcheng"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('common:NAV.DONATE')}
        </Label>
        <Label
          as="a"
          fontSize={25}
          fontWeight="bold"
          textAlign="center"
          mb={20}
          href="mailto:support@wahd.app"
        >
          {t('common:NAV.CONTACT')}
        </Label>
        <Link href="/faq">
          <Label
            as="a"
            href="/faq"
            fontSize={25}
            fontWeight="bold"
            textAlign="center"
            mb={20}
          >
            {t('common:NAV.FAQ')}
          </Label>
        </Link>
      </MobileMenu>
    </>
  );
}

export default Navigation;
