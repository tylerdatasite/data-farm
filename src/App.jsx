import React from 'react';
import TopNav from './components/TopNav/TopNav';

const App = () => {
    return (
        <div id='app'>
            <TopNav />
            Data Farm
        </div>
    );
};

export default App;

// Make a section for 'Sample Searches' as suggestions to lookup data from the API.

// Book Cover Pages
// Import list of books from Google Books API
// Make whole page (for one book viewing) UI look like the book cover of "Is This Anything?" by Jerry Seinfeld