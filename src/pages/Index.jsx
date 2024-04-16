import { Box, Grid, GridItem, Heading, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Image, Flex } from "@chakra-ui/react";
import { FaUser, FaDollarSign, FaShoppingCart, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Business Dashboard
      </Heading>

      <Grid templateColumns="repeat(4, 1fr)" gap={8} mb={12}>
        <GridItem>
          <Stat>
            <StatLabel>
              <FaUser /> Total Users
            </StatLabel>
            <StatNumber>1,200</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              12% from last month
            </StatHelpText>
          </Stat>
        </GridItem>

        <GridItem>
          <Stat>
            <StatLabel>
              <FaDollarSign /> Revenue
            </StatLabel>
            <StatNumber>$42,500</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              5% from last month
            </StatHelpText>
          </Stat>
        </GridItem>

        <GridItem>
          <Stat>
            <StatLabel>
              <FaShoppingCart /> Orders
            </StatLabel>
            <StatNumber>780</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              8% from last month
            </StatHelpText>
          </Stat>
        </GridItem>

        <GridItem>
          <Stat>
            <StatLabel>
              <FaChartLine /> Conversion Rate
            </StatLabel>
            <StatNumber>2.5%</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              0.5% from last month
            </StatHelpText>
          </Stat>
        </GridItem>
      </Grid>

      <Grid templateColumns="2fr 1fr" gap={8}>
        <GridItem>
          <Box bg="white" borderRadius="lg" boxShadow="md" p={6}>
            <Heading size="lg" mb={4}>
              Sales Overview
            </Heading>
            <Image src="https://images.unsplash.com/photo-1639389016237-85a1a16f76d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaW5lJTIwY2hhcnQlMjBzaG93aW5nJTIwaW5jcmVhc2luZyUyMHNhbGVzfGVufDB8fHx8MTcxMzI2Mjg0M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Sales chart" />
          </Box>
        </GridItem>

        <GridItem>
          <Box bg="white" borderRadius="lg" boxShadow="md" p={6}>
            <Heading size="lg" mb={4}>
              Top Products
            </Heading>
            <Flex direction="column">
              <Text>1. Product A</Text>
              <Text>2. Product B</Text>
              <Text>3. Product C</Text>
              <Text>4. Product D</Text>
              <Text>5. Product E</Text>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Index;
