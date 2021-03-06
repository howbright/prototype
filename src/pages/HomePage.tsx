import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import GroupIcon from '@mui/icons-material/Group';
import CampaignIcon from '@mui/icons-material/Campaign';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import BasicAppBar from '../components/BasicAppBar';
import AboutPage from './About';
import ContactPage from './Contact';
import { useParams } from 'react-router-dom';



function refreshMessages(): MessageExample[] {
  const getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(10)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}

export default function HomePage() {
  const { page } = useParams();
  console.log(page);
  // const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
  (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [selectedTab, setMessages]);

  return (
    <div>
    <BasicAppBar></BasicAppBar>
    <Box sx={{ pb: 7 }} ref={ref}>
      {/* <List>
        {messages.map(({ primary, secondary, person }, index) => (
          <ListItem button key={index + person}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={person} />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItem>
        ))}
      </List> */}
      {selectedTab === 0 && <AboutPage/>}
      {selectedTab === 1 && <ContactPage/>}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={selectedTab}
          onChange={(event, newValue) => {
            setSelectedTab(newValue);
          }}
        >
          <BottomNavigationAction label="???" icon={<HomeIcon />} />
          <BottomNavigationAction label="?????????" icon={<CampaignIcon />} />
          <BottomNavigationAction label="????????? ??????" icon={<GroupIcon />} />
          <BottomNavigationAction label="????????????" icon={<AllInboxIcon />} />
          <BottomNavigationAction label="??????" icon={<LibraryBooksIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
    </div>
  );
}

interface MessageExample {
  primary: string;
  secondary: string;
  person: string;
}

const messageExamples: readonly MessageExample[] = [
  {
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Birthday Gift',
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    primary: 'Recipe to try',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: '/static/images/avatar/2.jpg',
  },
  {
    primary: 'Yes!',
    secondary: 'I have the tickets to the ReactConf for this year.',
    person: '/static/images/avatar/3.jpg',
  },
  {
    primary: "Doctor's Appointment",
    secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
    person: '/static/images/avatar/4.jpg',
  },
  {
    primary: 'Discussion',
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Summer BBQ',
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: '/static/images/avatar/1.jpg',
  },
];