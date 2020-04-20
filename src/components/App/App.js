import React from 'react';
import Frame from 'components/Frame/Frame';
import Window from 'components/Window/Window';
import Header from 'components/Header/Header';
import Metadata from 'components/Metadata/Metadata';
import Attachment from 'components/Attachment/Attachment';
import Footer from 'components/Footer/Footer';
import Controls from 'components/Controls/Controls';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-500 p-8">
      <Frame>
        <Window>
          <Header />
          <Metadata />
          <Attachment />
          <Footer />
        </Window>
      </Frame>

      <Controls />
    </div>
  );
};

export default App;
