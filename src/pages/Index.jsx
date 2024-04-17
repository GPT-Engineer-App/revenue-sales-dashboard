import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Heading } from "@chakra-ui/react";
import { FaDollarSign, FaShoppingCart, FaUsers, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={10}>Business Dashboard</Heading>
      <SimpleGrid columns={2} spacing={10}>
        <StatBox icon={FaDollarSign} title="Revenue" amount="$30,000" percentage="12.5%" status="increase" />
        <StatBox icon={FaShoppingCart} title="Sales" amount="425" percentage="5.9%" status="increase" />
        <StatBox icon={FaUsers} title="New Customers" amount="68" percentage="3.1%" status="decrease" />
        <StatBox icon={FaChartLine} title="Expenses" amount="$12,000" percentage="8.2%" status="increase" />
      </SimpleGrid>
    </Box>
  );
};

const StatBox = ({ icon: Icon, title, amount, percentage, status }) => {
  return (
    <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
      <Flex alignItems="center">
        <Box fontSize="3xl" color="gray.500" as={Icon} />
        <Box ml={3}>
          <StatLabel fontWeight="medium">{title}</StatLabel>
          <StatNumber fontSize="2xl">{amount}</StatNumber>
          <StatHelpText>
            <StatArrow type={status} />
            {percentage}
          </StatHelpText>
        </Box>
      </Flex>
    </Stat>
  );
};

export default Index;
