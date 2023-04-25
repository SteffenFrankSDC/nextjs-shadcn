import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;


export const Basic: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "" }
};
