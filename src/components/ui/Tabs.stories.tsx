import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

const meta: Meta<typeof Tabs> = {
    component: Tabs,
} as Meta<typeof Tabs>;

export default meta;
type TabsStory = StoryObj<typeof Tabs>;
type TabsListStory = StoryObj<typeof TabsList>;

export const Root: TabsStory = {
    render: ({ orientation, ...args }) =>
        <Tabs defaultValue="account" orientation={orientation} {...args}>
            <TabsList>
                <TabsTrigger value="account" >Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
            </TabsList >
            <TabsContent value="account" className='m-1'>
                Account Content
            </TabsContent>
            <TabsContent value="password" className='m-1'>
                Password Content
            </TabsContent>
            <TabsContent value="disabled" className='m-1'>
                Disabled Content - should not be selectable
            </TabsContent>
        </Tabs >,
    args: { className: "w-[400px]", orientation: "horizontal" },
};

export const HorizontalTabsList: TabsListStory = {
    render: (args) =>
        <TabsList {...args}>
            <TabsTrigger value="account" >Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
        </TabsList >,
    args: { scale: "md", semantics: "default", variant: "border" },
    decorators: [
        Story =>
            <Tabs orientation="horizontal" defaultValue="account" className="w-fit">
                <Story />
                <TabsContent value="account" className='m-1'>
                    Account Content
                </TabsContent>
                <TabsContent value="password" className='m-1'>
                    Password Content
                </TabsContent>
                <TabsContent value="disabled" className='m-1'>
                    Disabled Content - should not be selectable
                </TabsContent>
            </Tabs>,
    ]
};

export const VarticalTabsList: TabsListStory = {
    render: (args) =>
        <TabsList {...args}>
            <TabsTrigger value="account" >Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
        </TabsList >,
    args: { scale: "md", semantics: "default", variant: "border" },
    decorators: [
        Story =>
            <Tabs orientation="vertical" defaultValue="account" className="w-fit">
                <Story />
                <TabsContent value="account" className='m-1'>
                    Account Content
                </TabsContent>
                <TabsContent value="password" className='m-1'>
                    Password Content
                </TabsContent>
                <TabsContent value="disabled" className='m-1'>
                    Disabled Content - should not be selectable
                </TabsContent>
            </Tabs>
    ]
};
