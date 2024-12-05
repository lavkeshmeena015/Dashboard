// /*eslint-disable*/
// import React from "react";
// import {
//   Flex,
//   Link,
//   List,
//   ListItem,
//   Text,
//   Button,
//   useColorMode,
//   useColorModeValue,
// } from "@chakra-ui/react";

// export default function Footer() {
//   const textColor = useColorModeValue("gray.400", "white");
//   const { toggleColorMode } = useColorMode();
//   return (
//     <Flex
//       zIndex='3'
//       flexDirection={{
//         base: "column",
//         xl: "row",
//       }}
//       alignItems={{
//         base: "center",
//         xl: "start",
//       }}
//       justifyContent='space-between'
//       px={{ base: "30px", md: "50px" }}
//       pb='30px'>
//       <Text
//         color={textColor}
//         textAlign={{
//           base: "center",
//           xl: "start",
//         }}
//         mb={{ base: "20px", xl: "0px" }}>
//         {" "}
//         &copy; {1900 + new Date().getYear()}
//         <Text as='span' fontWeight='500' ms='4px'>
//           MakerSpace NIT RAIPUR. All Rights Reserved. Made with love by
//           <Link
//             mx='3px'
//             color={textColor}
//             href='https://www.simmmple.com?ref=horizon-chakra-free'
//             target='_blank'
//             fontWeight='700'>
//             Simmmple!
//           </Link>
//         </Text>
//       </Text>
//       <List display='flex'>
//         <ListItem
//           me={{
//             base: "20px",
//             md: "44px",
//           }}>
//           <Link
//             fontWeight='500'
//             color={textColor}
//             href='mailto:hello@simmmple.com'>
//             Support
//           </Link>
//         </ListItem>
//         <ListItem
//           me={{
//             base: "20px",
//             md: "44px",
//           }}>
//           <Link
//             fontWeight='500'
//             color={textColor}
//             href='https://www.simmmple.com/licenses?ref=horizon-chakra-free'>
//             License
//           </Link>
//         </ListItem>
//         <ListItem
//           me={{
//             base: "20px",
//             md: "44px",
//           }}>
//           <Link
//             fontWeight='500'
//             color={textColor}
//             href='https://simmmple.com/terms-of-service?ref=horizon-chakra-free'>
//             Terms of Use
//           </Link>
//         </ListItem>
//         <ListItem>
//           <Link
//             fontWeight='500'
//             color={textColor}
//             href='https://www.blog.simmmple.com/?ref=horizon-chakra-free'>
//             Blog
//           </Link>
//         </ListItem>
//       </List>
//     </Flex>
//   );
// }

/*eslint-disable*/
import React from "react";
import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const textColor = useColorModeValue("gray.400", "white");

  return (
    <Flex
      zIndex="3"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={{ base: "30px", md: "50px" }}
      pb="30px"
    >
      {/* Row: Contact Info, Social Media, Policies */}
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{
          base: "column",
          md: "row",
        }}
        mb="20px"
      >
        {/* Contact Info */}
        <Flex
          flexDirection="column"
          textAlign={{
            base: "center",
            md: "start",
          }}
          mb={{ base: "20px", md: "0px" }}
        >
          <Text fontWeight="500" color={textColor}>
            Contact Info:
          </Text>
          <Text color={textColor}>
            Address: MakerSpace, NIT Raipur, G.E. Road, Raipur, 492010
          </Text>
          <Text color={textColor}>
            Email:{" "}
            <Link
              href="mailto:contact@makerspace.com"
              color={textColor}
              fontWeight="500"
            >
              contact@makerspace.com
            </Link>
          </Text>
        </Flex>

        {/* Links Section */}
        <List
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          mb={{ base: "20px", md: "0px" }}
        >
          <ListItem me={{ md: "100px", base: "0px" }}>
            <Link fontWeight="500" color={textColor} href="/privacy-policy">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem me={{ md: "44px", base: "0px" }}>
            <Link fontWeight="500" color={textColor} href="/terms-of-service">
              Terms of Service
            </Link>
          </ListItem>
        </List>

        {/* Social Media Links */}
        <Flex justifyContent="start">
          <Link
            href="https://www.facebook.com"
            isExternal
            mx="10px"
          >
            <Icon as={FaFacebook} w={6} h={6} color={textColor} />
          </Link>
          <Link
            href="https://www.instagram.com/makerspace.nitrr/"
            isExternal
            mx="10px"
          >
            <Icon as={FaInstagram} w={6} h={6} color={textColor} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/makerspace-nitrr/"
            isExternal
            mx="10px"
          >
            <Icon as={FaLinkedin} w={6} h={6} color={textColor} />
          </Link>
        </Flex>
      </Flex>

      {/* Copyright Information */}
      <Text
        color={textColor}
        textAlign="center"
      >
        &copy; {1900 + new Date().getYear()} MakerSpace NIT RAIPUR. All Rights Reserved.
      </Text>
    </Flex>
  );
}
