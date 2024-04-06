import { Box, VStack, Text, FormControl, FormLabel, Input, Select, RadioGroup, Radio, Textarea, Button } from "@chakra-ui/react";

function RegistrationForm() {
  return (
    <>
      <Box p={8}>
        <VStack spacing={4} align="stretch">
          <Text fontSize="3xl">Member Registration</Text>
          <Text fontSize="md">Please fill this form</Text>
          <form>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" required/>
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" required/>
            </FormControl>

            <FormControl>
              <FormLabel>Hobby</FormLabel>
              <Select name="hobby">
                <option value="reading">Reading</option>
                <option value="sport">Sport</option>
                <option value="gaming">Gaming</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup name="gender">
                <Radio value="male">Male</Radio>
                <Radio value="female" marginLeft={8}>Female</Radio>
              </RadioGroup>
            </FormControl>

            <FormControl>
              <FormLabel>Address</FormLabel>
                <Textarea name="address" required/>
            </FormControl>

            <Box marginTop={8}>
              <Button type="submit" colorScheme="blue">Submit</Button>
            </Box>
          </form>
        </VStack>
      </Box>
    </>
  )
}

export default RegistrationForm;