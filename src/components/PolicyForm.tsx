import React from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const PolicyForm: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Generate Legal Policy</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="businessName">Business Name</Label>
          <Input id="businessName" placeholder="Your Business Name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="policyType">Policy Type</Label>
          <Select>
            <SelectTrigger id="policyType">
              <SelectValue placeholder="Select policy type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="privacy-policy">Privacy Policy</SelectItem>
              <SelectItem value="terms-of-service">Terms of Service</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-2 mt-4">
        <Label htmlFor="businessDescription">Business Description</Label>
        <Textarea id="businessDescription" placeholder="Describe your business and its activities..." rows={6} />
      </div>
      <div className="mt-6 text-center">
        <Button size="lg">Generate Policy</Button>
      </div>
    </div>
  );
};

export default PolicyForm;