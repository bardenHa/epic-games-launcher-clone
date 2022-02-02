import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { AiFillTag } from 'react-icons/ai'

import NavigationButton from '@/components/buttons/NavigationButton'

import RocketLeague from '~/images/rocketleague.jpg'

export default {
  title: 'Components/Buttons/NavigationButton',
  component: NavigationButton,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof NavigationButton>

const Template: ComponentStory<typeof NavigationButton> = (args) => (
  <NavigationButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
  variant: 'primary',
  active: true,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  active: true,
  icon: <AiFillTag />,
  children: 'Button',
}

export const WithGame = Template.bind({})
WithGame.args = {
  active: true,
  game: RocketLeague,
  children: 'Button',
}
