import { Button } from 'react-bootstrap'
import Contract from '../components/NFTcontract';
export default function Onlyowner(){

    const toggleReveal = async() =>{
        let reveal = await Contract.toggleReveal();
    }
    return (
        <>
            <Button className='tr_btn mt-2'
            // variant='light'
            onClick={toggleReveal}
            >
                Toggle Reveal
            </Button>
        </>
    )
}