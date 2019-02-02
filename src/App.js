import React, { Component } from 'react';
import axios from 'axios'
import Feed from './components/Feed'
import SearchChannels from './components/Search'
import Channel from './components/Channel'
import Story from './components/Story'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeStory: null,
      activeChannel: null,
      activeChannelSearch: null,
      searchQuery: null,
    }
    this.topChannels();
    this.searchChannels = this.searchChannels.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleChannelSelect = this.handleChannelSelect.bind(this);
    this.handleStorySelect = this.handleStorySelect.bind(this);
  }

  topChannels() {
    axios
      .get(
        `https://www.taringa.net/apiv7/c/list/hot?count=100&after=ina0&sort=hotness/`
      )
      .then(response => {
        this.setState({
          activeChannelSearch: response.data,
          activeChannel: null,
          activeStory: null,
        })
      })
      .catch(error => {
        // handle error
          console.log(error.message)
          alert(error)
      })
  }

  searchChannels(query) {

    const config = {params: {q: query, count: 100}};
    axios
      .get(
        `https://www.taringa.net/apiv7/search/channel`,
        config
      )
      .then(response => {
        this.setState({
          activeChannelSearch: response.data,
          activeChannel: null,
          activeStory: null,
        })
      })
      .catch(error => {
        // handle error
          console.log(error.message)
          alert(error)
      })
  }

  handleQueryChange(event){
    //console.log(event.target.value);
    this.setState({searchQuery: event.target.value});
  }

  handleSearch(event) {
    event.preventDefault();
    this.searchChannels(this.state.searchQuery);
  }

  handleChannelSelect(e, channelName) {
      const config = {params: {count: 100, sort: "bigbang1d"}};
      axios
        .get(
          `https://www.taringa.net/apiv7/c/${channelName}/feed`,
          config
        )
        .then(response => {
           this.setState({activeChannel: response.data});
        })
        .catch(error => {
          // handle error
            console.log(error.message)
            alert(error)
        })
    }

  handleStorySelect(e, story) {
      axios
        .get(
          `https://www.taringa.net/apiv7/story/${story.id}/comments?sort=created-desc&count=500&repliesCount=100&repliesSort=created-desc`,
        )
        .then(response => {
           let existing = this.state.activeStory ? this.state.activeStory : {};
           existing.comments = response.data;
           this.setState({activeStory: existing});
        })
        .catch(error => {
          // handle error
            console.log(error.message)
            alert(error)
        })
      const config = {
        params:{source_url: `http://www.taringa.net/+${story.channel.name}/${story.slug}/`},
      };
      axios
        .get(
          `https://outlineapi.com/v2/parse_article`,
          config,
        )
        .then(response => {
           let existing = this.state.activeStory ? this.state.activeStory : {};
           existing.original = response.data;
           this.setState({activeStory: existing});
        })
        .catch(error => {
          // handle error
            console.log(error.message)
            alert(error)
        })
    }

  render() {
    let main = (<Feed channels={this.state.activeChannelSearch} onClick={this.handleChannelSelect} />);
    if (this.state.activeStory) {
      main = (<Story story={this.state.activeStory} />);
      console.log("Story time");
    } else if (this.state.activeChannel) {
      main = (<Channel posts={this.state.activeChannel} onClick={this.handleStorySelect} />);
    }
    return (
      <div className="App">
        <SearchChannels query={this.state.searchQuery} inputChange={this.handleQueryChange} onClick={this.handleSearch} />
        {main}
      </div>
    );
  }
}

export default App;
