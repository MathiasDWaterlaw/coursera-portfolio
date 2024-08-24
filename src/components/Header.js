import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(`${anchor}-section`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // BONUS STEP 5
  useEffect(() => {
    let scrollPosition = window.scrollY;
    const handleScroll = () => {
      const header = headerRef.current;
      const currentScrollPosition = window.scrollY;

      if (!header) {
        return;
      }

      if (scrollPosition > currentScrollPosition) {
        header.style.transform = "translateY(0)";
      } else {
        header.style.transform = "translateY(-200px)";
      }

      scrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position='fixed'
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty='transform'
      transitionDuration='.3s'
      transitionTimingFunction='ease-in-out'
      backgroundColor='#18181b'
      zIndex={1}
      ref={headerRef}
    >
      <Box color='white' maxWidth='1280px' margin='0 auto'>
        <HStack
          px={16}
          py={4}
          justifyContent='space-between'
          alignItems='center'
        >
          {/* STEP 1 */}
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={6}>
              {socials.map((social) => (
                <a href={social.url} target='_blank' key={social.url}>
                  <FontAwesomeIcon icon={social.icon} size={"2x"} />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href='#projects-section' onClick={handleClick("projects")}>
                Projects
              </a>
              <a href='#contactme-section' onClick={handleClick("contactme")}>
                Contact me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
