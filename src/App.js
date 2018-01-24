import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="page-front">
  <header className="navbar navbar-static-top bs-docs-nav" id="top" role="banner">
    <div className="container">
      <div className="navbar-header">
        <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a href="#/" className="navbar-brand"><i className="fa fa-stumbleupon fa-2x"></i></a>
      </div>
      <nav className="collapse navbar-collapse bs-navbar-collapse">

        <ul className="nav navbar-nav navbar-right">
          <li><a href="#/">About</a></li>
          <li><a href="#/artist-list">Search artists</a></li>
          <li><a href="#/albums">Albums</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <div className="hero-container">
    <div className="text-center top-header-text" >
      <div className="front-title">
        <h1>Because Music Brings us Together</h1>
      </div>
      <div className="front-message">
        <p>
          Search millions of music videos
        </p>
        <p>
          Create your own libraries 
        </p>
      </div>
      <div>
        <center><a className="btn btn-primary" href="#/dashboard">
          Listen and Watch for free
        </a></center>
        
      </div>

    </div>
    <div className="arrow_slide_down" >
      <a href="#/dashboard">
        <i className="fa fa-stumbleupon fa-2x " ></i>
      </a>
    </div>
  </div>
  <div className="front-intro">
    <div className="container">

      <div className="front-intro__message">
        <h2>Playlists</h2>
        <p>
          The community does the work, we bring the best playlists to you
        </p>
      </div>

      <div className="row front-intro-icons">
        <div className="col-md-3">

          <i className="fa fa-history fa-2x color-primary icon_circled">

          </i>
          <p>
           Any artist, album, track around the world
          </p>

        </div>
        <div className="col-md-3">

          <i className="fa fa-headphones fa-2x color-primary icon_circled">

          </i>
          <p>
            Karaoke?
          </p>

        </div>
        <div className="col-md-3">

          <i className="fa fa-bell-o fa-2x color-primary icon_circled">

          </i>
          <p>
            Build your custom playlist and have a party
          </p>

        </div>
        <div className="col-md-3">

          <i className="fa fa-codepen fa-2x color-primary icon_circled">

          </i>
          <p>
            Take a break
          </p>

        </div>
      </div>
    </div>
  </div>
  <div className="front-bg-section">
    <div className="container">
      <div className="front-title">
        <h1>Share your music</h1>
      </div>
      <div className="front-message">
        <p>
          Tucantu gives you access to your favourite music anywhere. Listen to your songs and share them with your friends creating your music connection worldwide.
        </p>
        <p>
          <a ng-href="#/pages/signin" className="btn btn-primary">
            Create your free acount
          </a>
        </p>
      </div>
    </div>
  </div>

  <div className="front-intro">
    <div className="container">

      <div className="front-intro__message">
        <h2>
          Its your music, its your decision
        </h2>
        <p>
          We value privacy, and what you listen also belongs to you
        </p>
      </div>

      <div className="row front-intro-icons__gray">
        <div className="col-md-4">

          <i className="fa fa-sellsy fa-2x icon_gray">

          </i>
          <h3>
            Build weird playlists
          </h3>
          <p>
            Your unique country, metal, rock, edm ... playlist 
          </p>
        </div>
        <div className="col-md-4">

          <i className="fa fa-compass fa-2x icon_gray">

          </i>
          <h3>
            Only you get you?
          </h3>
          <p>
            We all like different things...
          </p>

        </div>
        <div className="col-md-4">

          <i className="fa fa-bolt fa-2x icon_gray">

          </i>
          <h3>
            Karaoke!
          </h3>
          <p>
            Build a library with your favorite karaoke videos and have a party
          </p>

        </div>
      </div>
    </div>
  </div>

  <div className="front-intro">
    <div className="container">

      <div className="front-intro__message">
        <h2>
          Why Tucantu?
        </h2>
      </div>

      <div className="row why-exists">
        <div className="col-md-6">
          <h5>
            <i className="fa fa-headphones"></i>You love life
          </h5>
        </div>
        <div className="col-md-6">
          <h5>
            <i className="fa fa-calendar"></i>You want to live longer
          </h5>
        </div>
        <div className="col-md-6">
          <h5>
            <i className="fa fa-heart"></i>You want to share music
          </h5>
        </div>
        <div className="col-md-6">
          <h5>
            <i className="fa fa-bell"></i>You are hungry
          </h5>
        </div>
        <div className="col-md-6">
          <h5>
            <i className="fa fa-code"></i>You like to sing
          </h5>
        </div>
        <div className="col-md-6">
          <h5>
            <i className="fa fa-history"></i>You are awesome
          </h5>
        </div>
        <div className="col-md-6">
          <h5>
            <i className="fa fa-home"></i>We have all of your music
          </h5>
        </div>
        <div className="col-md-6">
          <h5>
            <i className="fa fa-trophy"></i>Listen and Feel Good!
          </h5>
        </div>
      </div>
    </div>
  </div>

</div>
    );
  }
}

export default App;
