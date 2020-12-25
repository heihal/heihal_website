

import React from 'react'
import  {Card, Carousel} from 'react-bootstrap';



const teksti =[
  {
    id: 1,
    content: [
            "Olen luonteeltani utelias, pidän ongelmien - teknisten ja luovien - ratkomisesta, siksi  haenkin uusia tapoja kehittää itseäni. Olen aina ollut kiinnostunut ",
           "siitä miten maailma toimii ja pienestä asti luonnontieteet ovat olleet lähellä sydäntäni.",
           " Olen sote-alan ammattilainen ja tällä hetkellä",
           "opiskelen yliopistossa tietotekniikkaa. Pyrin yhdistämään nämä kaksi alaa",
           "- kiinnostuksen kohdetta, ja tavoitteenani on kehittyä terveysteknologian ammattilaiseksi."]
    ,
    id: 2,
    content: [
            "sgOlen luonteeltani utelias, pidän ongelmien - teknisten ja luovien - ratkomisesta, siksi  haenkin uusia tapoja kehittää itseäni. Olen aina ollut kiinnostunut ",
           "siitä miten maailma toimii ja pienestä asti luonnontieteet ovat olleet lähellä sydäntäni.",
           " Olen sote-alan ammattilainen ja tällä hetkellä",
           "opiskelen yliopistossa tietotekniikkaa. Pyrin yhdistämään nämä kaksi alaa",
           "- kiinnostuksen kohdetta, ja tavoitteenani on kehittyä terveysteknologian ammattilaiseksi."]
    }
]





    const Main = () => {
 

    

      const cardStyle= {
        backgroundColor: ' #434343',
        width:"50%",
        marginLeft:"25%",
        marginTop:"25%"
      }


        return(  
         
     
          
        
            
            
           
    
        
        <>
        <Carousel >
        
        
        <Carousel.Item  > 
          <div  >
          <Card style={cardStyle} >
            <Card.Body>
            <h3>First slide label</h3>
            "Olen luonteeltani utelias, pidän ongelmien - teknisten ja luovien - ratkomisesta, siksi  haenkin uusia tapoja kehittää itseäni. Olen aina ollut kiinnostunut ",
           "siitä miten maailma toimii ja pienestä asti luonnontieteet ovat olleet lähellä sydäntäni.",
           " Olen sote-alan ammattilainen ja tällä hetkellä",
           "opiskelen yliopistossa tietotekniikkaa. Pyrin yhdistämään nämä kaksi alaa",
           "- kiinnostuksen kohdetta, ja tavoitteenani on kehittyä terveysteknologian ammattilaiseksi."
            </Card.Body>
          </Card>
         
          
          
          </div>
          
        </Carousel.Item>
        
      
        <Carousel.Item  > 
          <div  ><h3>First slide label</h3>
          <Card style={cardStyle} >
            <Card.Body>
            "dfhOlen luonteeltani utelias, pidän ongelmien - teknisten ja luovien - ratkomisesta, siksi  haenkin uusia tapoja kehittää itseäni. Olen aina ollut kiinnostunut ",
           "siitä miten maailma toimii ja pienestä asti luonnontieteet ovat olleet lähellä sydäntäni.",
           " Olen sote-alan ammattilainen ja tällä hetkellä",
           "opiskelen yliopistossa tietotekniikkaa. Pyrin yhdistämään nämä kaksi alaa",
           "- kiinnostuksen kohdetta, ja tavoitteenani on kehittyä terveysteknologian ammattilaiseksi."
            </Card.Body>
          </Card>
         
          
          
          </div>
          
        </Carousel.Item>
          
          
          </Carousel>
    
      </>
           
            
        
        );
       
    }
    

     
      
   

    

export default Main;