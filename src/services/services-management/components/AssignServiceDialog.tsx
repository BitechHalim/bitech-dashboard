import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  initialServices,
  availableCompanies,
} from '@/services/services-management/fake-db';
import MultiSelectDropdown from '@/components/forms/MultiSelect/MultiSelect';

interface AssignServicePayload {
  serviceId: string;
  companies: string[];
  configuration: string;
}

interface AssignServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAssign: (data: AssignServicePayload) => void;
}

const AssignServiceDialog: React.FC<AssignServiceDialogProps> = ({
  open,
  onOpenChange,
  onAssign,
}) => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [configuration, setConfiguration] = useState<string>('');

  // Convert available companies to the format expected by MultiSelectDropdown
  const companyOptions = availableCompanies.map(company => ({
    value: company,
    label: company,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAssign({
      serviceId: selectedService,
      companies: selectedCompanies,
      configuration,
    });
    handleReset();
  };

  const handleReset = () => {
    setSelectedService('');
    setSelectedCompanies([]);
    setConfiguration('');
  };

  return (
    <Dialog
      open={open}
      onOpenChange={open => {
        if (!open) handleReset();
        onOpenChange(open);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Assign New Service</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="service">Service</Label>
            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger id="service">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {initialServices.map(service => (
                  <SelectItem key={service.id} value={service.id.toString()}>
                    {service.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Select Companies</Label>
            <MultiSelectDropdown
              options={companyOptions}
              value={selectedCompanies}
              onChange={setSelectedCompanies}
              placeholder="Select companies..."
              maxCount={5}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="configuration">Configuration</Label>
            <Textarea
              id="configuration"
              value={configuration}
              onChange={e => setConfiguration(e.target.value)}
              placeholder="Enter service configuration..."
              className="min-h-[100px]"
            />
          </div>

          <DialogFooter className="sm:justify-end">
            <Button
              type="button"
              variant="secondary"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!selectedService || selectedCompanies.length === 0}
            >
              Assign Service
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AssignServiceDialog;
