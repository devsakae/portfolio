import React, { Component, ReactElement } from 'react';
import { BsGithub, BsTwitter, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { IconContext } from 'react-icons';

type Props = {}
type State = {}

const mySocial = [
  {
    // Github
    component: <BsGithub />,
    url: 'https://github.com/devsakae',
  },
  {
    // Linkedin
    component: <BsLinkedin />,
    url: 'https://www.linkedin.com/in/rodrigosakae',
  },
  {
    // Twitter
    component: <BsTwitter />,
    url: 'http://www.twitter.com/Sakae',
  },
  {
    // Instagram
    component: <BsInstagram />,
    url: 'http://www.instagram.com/rsakae',
  },
  {
    // WhatsApp
    component: <BsWhatsapp />,
    url: 'http://wa.me/+5548991371440',
  },
];

class Social extends Component<Props, State> {
  state = {}

  public social = (link: string, children: ReactElement) => <a key={ link } href={ link } target='blank' className='hover:shadow-lg hover:text-cyan-900'>{ children }</a>

  render() {
    return (
      <IconContext.Provider value={{ color: '#333', size: '2.5em' }}>
        <div className='flex flex-row gap-x-4 mt-4 bg-white bg-opacity-40 md:bg-transparent w-fit py-1 px-2 text-slate-900'>
          { mySocial.map(({ url, component }) => this.social(url, component)) }
        </div>
      </IconContext.Provider>
    )
  }
}


export default Social