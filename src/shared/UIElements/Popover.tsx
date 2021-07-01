import { OverlayTrigger, Button } from 'react-bootstrap'

interface PopoverProps {
  popover: any
  address:{
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
  }
}

export const PopOver:React.FC<PopoverProps> = ({ popover,address }) => (
  <OverlayTrigger 
    trigger="focus"   
    placement="right" 
    overlay={popover}
  >
    <Button variant="light">
      { address.street  }
    </Button>
  </OverlayTrigger>
)
  
