import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import { Clips } from '../clips';
import { Poules } from '../poules';
import { Explanations } from '../explanations';
import { Stats } from '../stats';
// import { Timers } from '../timers';
import { Leaderboard } from '../leaderboard';
import { MapsList } from '../maps';
import { Live } from '../live';

import { Credits } from './credits';

const defaultActiveKey = 'clips';

export function TabsPanel() {
  const [selectedTab, setSelectedTab] = useState<string | null>(defaultActiveKey);
  return (
    <>
      <Tabs id="tabs" variant="pills" defaultActiveKey={defaultActiveKey} className="nav-fill border-bottom pb-3" mountOnEnter unmountOnExit onSelect={(e) => setSelectedTab(e)}>
        <Tab eventKey="presentation" title="Le Kacky" className="flex-fill">
          <Explanations />
        </Tab>
        <Tab eventKey="live" title="Livestream" className="flex-fill">
          <Live />
        </Tab>
        {/* <Tab eventKey="timers" title="Timers" className="flex-fill" >
        <Timers />
      </Tab> */}
        <Tab eventKey="maps" title="Maps" className="flex-fill">
          <MapsList />
        </Tab>
        <Tab eventKey="leaderboard" title="Leaderboard" className="flex-fill">
          <Leaderboard />
        </Tab>
        <Tab eventKey="clips" title="Clips" className="flex-fill">
          <Clips />
        </Tab>
        <Tab eventKey="stats" title="Stats" className="flex-fill">
          <Stats />
        </Tab>
        <Tab eventKey="poules" title="P O U L E ?" className="flex-fill">
          <Poules />
        </Tab>
      </Tabs>
      <Credits selectedTab={selectedTab} />
    </>
  );
}
