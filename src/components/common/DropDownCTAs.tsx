import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreVertical } from 'lucide-react';

interface DropDownCTAsProps {
  options: { label: string; onClick: () => void }[];
  triggerJSX?: React.ReactNode;
}

const DropDownCTAs = ({ options, triggerJSX }: DropDownCTAsProps) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {triggerJSX ? (
            triggerJSX
          ) : (
            <Button variant="ghost" className="h-4 w-4 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {options.map((option, index) => (
            <DropdownMenuItem key={index} onClick={option.onClick}>
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDownCTAs;
