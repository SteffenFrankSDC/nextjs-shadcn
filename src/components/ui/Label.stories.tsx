import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './label';
import { Input } from './input';

const meta: Meta<typeof Label> = {
    component: Label,
};

export default meta;
type Story = StoryObj<typeof Label>;


export const Basic: Story = {
    render: (args) => <div className="flex flex-col items-start space-y-2">
        <Label htmlFor="name" {...args}>Please enter your name</Label>
        <Input id="name" disabled value="A label needs to be attached to some other element. e.g. an Input" />
    </div>,
    args: { className: "" }
};
