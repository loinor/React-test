import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form/';

const App = () => {
    return (
        <div className="app">
            <AppHeader></AppHeader>
            <div className="search-panel d-flex">
                <SearchPanel></SearchPanel>
                <PostStatusFilter></PostStatusFilter>
            </div>
            <PostList></PostList>
            <PostAddForm></PostAddForm>
        </div>
    )
}

export default App