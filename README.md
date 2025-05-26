# ReadyBlocks-UI

A collection of React components for building user interfaces.

## Documentation

Comprehensive documentation and interactive examples can be found on [Storybook](https://valeriapostylyakova.github.io/ReadyBlocks-UI/).

## Installation

```bash
npm install readyblocks-ui
```

## Usage

````typescript
import { useState } from 'react'
import { Button, Modal } from 'readyblocks-ui'

function App() {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  return (
    <div>
      <Button variant='outline' onClick={handleOpenModal}>
         Open Modal
      </Button>
      <Modal open={openModal} setOpen={setOpenModal} bgColor='#a7a7a7'>
         Modal
      </Modal>
    </div>
  )
}

export default App
``` default App
````
