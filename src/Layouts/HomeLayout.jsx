import {
  Flex,
  VStack,
  Heading,
  Image,
  Button,
  Stack,
  Show,
  Divider,
} from '@chakra-ui/react';
import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { logo, textLogo } from '../Assets';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Contact, HomePages, Predict, Tutorial, Faq } from '../Pages';
import { AppRoutes, Colors, isSelectedRoute } from '../Utils';

export default function HomeLayout() {
  const loc = useLocation();
  const navigate = useNavigate();
  const DEFAULT_TITLE = "DengueML: A Random Forest model for dengue drug discovery";

  const routes = [
    {
      label: 'Home',
      path: AppRoutes.home.path,
      title: AppRoutes.home.title,
    },
    {
      label: 'Predict',
      path: AppRoutes.predict.path,
      title: AppRoutes.predict.title,
    },
    {
      label: 'Tutorial',
      path: AppRoutes.tutorial.path,
      title: AppRoutes.tutorial.title,
    },
    {
      label: 'FAQ',
      path: AppRoutes.faq.path,
      title: AppRoutes.faq.title,
    },
    {
      label: 'Contact',
      path: AppRoutes.contact.path,
      title: AppRoutes.contact.title,
    },
  ];

  const handleNavigate = (path, data) => {
    navigate(path, { replace: true, state: { ...data } });
  };

  return (
    <VStack minW={'full'} minH="full">
      <Flex
        justifyContent={'space-between'}
        align="center"
        minW="full"
        height={'90'}
        shadow="md"
        borderWidth="0px"
        flexWrap={'wrap'}
      >
        <Show below="md">
          <Stack
            bg={Colors.primary}
            minH={'full'}
            minW={'full'}
            direction={['column']}
            align="center"
            spacing="-16px"
            pt={'5'}
          >
            <Image src={logo} width={70} mr="12" />
            <Image src={textLogo} width={160} />
          </Stack>
        </Show>
        <Show above="md">
          <Stack
            bg={Colors.primary}
            minH={'full'}
            minW={'2xs'}
            direction={['column']}
            align="center"
            spacing="-16px"
            pt={'5'}
          >
            <Image src={logo} width={70} mr="12" />
            <Image src={textLogo} width={160} />
          </Stack>
        </Show>
        <Show above="md">
          <Heading pl="10" flex={1} size={'md'}>
            {loc.state?.title || DEFAULT_TITLE}
          </Heading>
        </Show>
        <Show above="md">
          {' '}
          <ColorModeSwitcher />
        </Show>
      </Flex>
      <Flex minW={'full'} minH="90vh" style={{ marginTop: 0 }}>
        <Show above="md">
          <VStack color={'#fff'} bg={Colors.primary} minH="full" minW="2xs">
            {routes?.map((val, index, arr) => (
              <Button
                key={`side-menu-${index}`}
                bg={Colors.primary}
                onClick={() => handleNavigate(val?.path, { title: val?.title })}
                isActive={isSelectedRoute(val.path, loc?.pathname)}
                _hover={{ backgroundColor: Colors.highlightedMenu }}
                _active={{
                  backgroundColor: Colors.highlightedMenu,
                  borderRadius: 0.5,
                }}
                minW={'full'}
              >
                {val?.label}
              </Button>
            ))}
          </VStack>
        </Show>
        <Show above="md">
          <VStack flex={1} p="10">
            <Outlet />
          </VStack>
        </Show>
        <Show below="md">
          <VStack flex={1} p="12" spacing={16}>
            <HomePages />
            <Divider />
            <Predict />
            <Divider />
            <Tutorial />
            <Divider />
            <Faq />
            <Divider />
            <Contact />
          </VStack>
        </Show>
      </Flex>
    </VStack>
  );
}
