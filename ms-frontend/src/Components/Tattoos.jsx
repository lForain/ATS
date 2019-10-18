import 'materialize-css/dist/js/materialize'
import 'materialize-css/dist/css/materialize.min.css'
import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed';

class Tattoos extends Component{
    render(){
        return(
            <div className="row">
                <div className="col offset-s4">
                    <InstagramEmbed
                    url='https://www.instagram.com/p/B0bJJyrDaoz/'
                    maxWidth={500}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                    />
                </div>
                <div className="col offset-s4">
                    <InstagramEmbed
                    url='https://www.instagram.com/p/B1tVUb0pN8G/'
                    maxWidth={600}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                    />
                </div>
                <div className="col offset-s4">
                    <InstagramEmbed
                    url='https://www.instagram.com/p/B3kJ4ibl7uI/'
                    maxWidth={600}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                    />
                </div>
                <div className="col offset-s4">
                    <InstagramEmbed
                    url='https://www.instagram.com/p/B3YCFPnA4R9/'
                    maxWidth={600}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                    />
                </div>
                <div className="col offset-s4">
                    <InstagramEmbed
                    url='https://www.instagram.com/p/B2jqXlPhuxp/'
                    maxWidth={600}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                    />
                </div>
            </div>
        )
    }
}

export default Tattoos; 