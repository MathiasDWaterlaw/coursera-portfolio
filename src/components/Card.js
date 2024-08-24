import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  // STEP 3
  return (
    <VStack spacing={3} backgroundColor='white' color='black' rounded='xl'>
      <Image width='100%' src={imageSrc} alt={title} rounded='xl' />
      <Box paddingBottom={4} paddingX={4}>
        <VStack spacing={3} alignItems='flex-start'>
          <Heading size='md'>{title}</Heading>
          <Text style={{ hyphens: "auto" }} color='grey'>
            {description}
          </Text>
          <HStack spacing={2}>
            <Text fontWeight='bold'>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size='1x' />
          </HStack>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Card;
