import React from 'react';

function Pagination({ page }) {
    
    return (
        <div>
            {/* <!-- we recommend showing no more than 7 pages at a time, for more  than 7 pages use the pagination ellipsis --> */}

    <div className="o-buttons-pagination">
      <a href="#" className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-left o-buttons-icon--icon-only
        " disabled>
        <span className="o-buttons-icon__label">Fewer results</span>
      </a>
      <a href="#" className="o-buttons o-buttons--secondary" aria-current="page">1</a>
      <a href="#" className="o-buttons o-buttons--secondary">2</a>
      <a href="#" className="o-buttons o-buttons--secondary">3</a>
      <a href="#" className="o-buttons o-buttons--secondary">4</a>
      <a href="#" className="o-buttons o-buttons--secondary">5</a>
      <a href="#" className="o-buttons o-buttons--secondary">6</a>
      <a href="#" className="o-buttons o-buttons--secondary">7</a>
      <a href="#" className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-right o-buttons-icon--icon-only
        " disabled>
        <span className="o-buttons-icon__label">More results</span>
      </a>
    </div>

    <br className="demo-break" />

    {/* <!-- when the there are more than 7 pages, and the selected page is below 3, show ellipsis with 3 pages either side --> */}

    <div className="o-buttons-pagination">
      <a href="#" className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-left o-buttons-icon--icon-only
        " disabled>
        <span className="o-buttons-icon__label">Fewer results</span>
      </a>
      <a href="#" className="o-buttons o-buttons--secondary" aria-current="page">1</a>
      <a href="#" className="o-buttons o-buttons--secondary">2</a>
      <a href="#" className="o-buttons o-buttons--secondary">3</a>
      <span className="o-buttons-pagination__ellipsis">...</span>
      <a href="#" className="o-buttons o-buttons--secondary">18</a>
      <a href="#" className="o-buttons o-buttons--secondary">19</a>
      <a href="#" className="o-buttons o-buttons--secondary">20</a>
      <a href="#" className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-right o-buttons-icon--icon-only
        ">
        <span className="o-buttons-icon__label">More results</span>
      </a>
    </div>

    <br className="demo-break" />

    <div className="o-buttons-pagination">
      <a href="#" className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-left o-buttons-icon--icon-only
        ">
        <span className="o-buttons-icon__label">Fewer results</span>
      </a>
      <a href="#" className="o-buttons o-buttons--secondary">1</a>
      <a href="#" className="o-buttons o-buttons--secondary" aria-current="page">2</a>
      <a href="#" className="o-buttons o-buttons--secondary">3</a>
      <span className="o-buttons-pagination__ellipsis">...</span>
      <a href="#" className="o-buttons o-buttons--secondary">18</a>
      <a href="#" className="o-buttons o-buttons--secondary">19</a>
      <a href="#" className="o-buttons o-buttons--secondary">20</a>
      <a href="#" className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-right o-buttons-icon--icon-only
        ">
        <span className="o-buttons-icon__label">More results</span>
      </a>
    </div>

    <br className="demo-break" />

    {/* <!-- when the there are more than 7 pages, and the selected page is one of the last 2 pages, show ellipsis with 3 pages either side --> */}

    <div className="o-buttons-pagination">
      <a href="#" className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-left o-buttons-icon--icon-only
        ">
        <span className="o-buttons-icon__label">Fewer results</span>
      </a>
      <a href="#" className="o-buttons o-buttons--secondary">1</a>
      <a href="#" className="o-buttons o-buttons--secondary">2</a>
      <a href="#" className="o-buttons o-buttons--secondary">3</a>
      <span className="o-buttons-pagination__ellipsis">...</span>
      <a href="#" className="o-buttons o-buttons--secondary">18</a>
      <a href="#" className="o-buttons o-buttons--secondary">19</a>
      <a href="#" className="o-buttons o-buttons--secondary" aria-current="page">20</a>
      <a href="#" className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-right o-buttons-icon--icon-only
        " disabled>
        <span className="o-buttons-icon__label">More results</span>
      </a>
    </div>

    <br className="demo-break" />

    <div className="o-buttons-pagination">
      <a href="#" className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-left o-buttons-icon--icon-only
        ">
        <span className="o-buttons-icon__label">Fewer results</span>
      </a>
      <a href="#" className="o-buttons o-buttons--secondary">1</a>
      <a href="#" className="o-buttons o-buttons--secondary">2</a>
      <a href="#" className="o-buttons o-buttons--secondary">3</a>
      <span className="o-buttons-pagination__ellipsis">...</span>
      <a href="#" className="o-buttons o-buttons--secondary">18</a>
      <a href="#" className="o-buttons o-buttons--secondary" aria-current="page">19</a>
      <a href="#" className="o-buttons o-buttons--secondary">20</a>
      <a href="#" className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-right o-buttons-icon--icon-only
        ">
        <span className="o-buttons-icon__label">More results</span>
      </a>
    </div>

    <br className="demo-break" />

    {/* <!-- when the there are more than 7 pages, and the 3rd page is selected, show 4 pages, the ellipsis, and 2 more pages --> */}

    <div className="o-buttons-pagination">
      <a href="#" className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-left o-buttons-icon--icon-only
        ">
        <span className="o-buttons-icon__label">Fewer results</span>
      </a>
      <a href="#" className="o-buttons o-buttons--secondary">1</a>
      <a href="#" className="o-buttons o-buttons--secondary">2</a>
      <a href="#" className="o-buttons o-buttons--secondary" aria-current="page">3</a>
      <a href="#" className="o-buttons o-buttons--secondary">4</a>
      <span className="o-buttons-pagination__ellipsis">...</span>
      <a href="#" className="o-buttons o-buttons--secondary">19</a>
      <a href="#" className="o-buttons o-buttons--secondary">20</a>
      <a href="#" className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-right o-buttons-icon--icon-only
        ">
        <span className="o-buttons-icon__label">More results</span>
      </a>
    </div>

    <br className="demo-break" />

    {/* <!-- when the there are more than 7 pages, and the 3rd from last page is selected, show 2 pages, the ellipsis, and 4 more pages --> */}

    <div className="o-buttons-pagination">
      <a href="#" className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-left o-buttons-icon--icon-only
        ">
        <span className="o-buttons-icon__label">Fewer results</span>
      </a>
      <a href="#" className="o-buttons o-buttons--secondary">1</a>
      <a href="#" className="o-buttons o-buttons--secondary">2</a>
      <span className="o-buttons-pagination__ellipsis">...</span>
      <a href="#" className="o-buttons o-buttons--secondary">17</a>
      <a href="#" className="o-buttons o-buttons--secondary" aria-current="page">18</a>
      <a href="#" className="o-buttons o-buttons--secondary">19</a>
      <a href="#" className="o-buttons o-buttons--secondary">20</a>
      <a href="#" className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-right o-buttons-icon--icon-only
        ">
        <span className="o-buttons-icon__label">More results</span>
      </a>
    </div>

    <br className="demo-break" />

    {/* <!-- when the there are more than 7 pages, and the selected page is more than 3 from the first of last page -->
    <!-- show the first page, ellipsis, three pages, ellipsis, and the last page --> */}

    <div className="o-buttons-pagination">
      <a href="#" className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-left o-buttons-icon--icon-only
        ">
        <span className="o-buttons-icon__label">Fewer results</span>
      </a>
      <a href="#" className="o-buttons o-buttons--secondary">1</a>
      <span className="o-buttons-pagination__ellipsis">...</span>
      <a href="#" className="o-buttons o-buttons--secondary">13</a>
      <a href="#" className="o-buttons o-buttons--secondary" aria-current="page">14</a>
      <a href="#" className="o-buttons o-buttons--secondary">15</a>
      <span className="o-buttons-pagination__ellipsis">...</span>
      <a href="#" className="o-buttons o-buttons--secondary">20</a>
      <a href="#" className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-right o-buttons-icon--icon-only
        ">
        <span className="o-buttons-icon__label">More results</span>
      </a>
    </div>

    <br className="demo-break" />

    {/* <!-- note that a large number of pages (3 or more digits) will effect the size and alignment of pagination --> */}

    <div className="o-buttons-pagination">
      <a href="#" className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-left o-buttons-icon--icon-only
        ">
        <span className="o-buttons-icon__label">Fewer results</span>
      </a>
      <a href="#" className="o-buttons o-buttons--secondary">1</a>
      <a href="#" className="o-buttons o-buttons--secondary" aria-current="page">2</a>
      <a href="#" className="o-buttons o-buttons--secondary">3</a>
      <span className="o-buttons-pagination__ellipsis">...</span>
      <a href="#" className="o-buttons o-buttons--secondary">198</a>
      <a href="#" className="o-buttons o-buttons--secondary">199</a>
      <a href="#" className="o-buttons o-buttons--secondary">200</a>
      <a href="#" className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-right o-buttons-icon--icon-only
        ">
        <span className="o-buttons-icon__label">More results</span>
      </a>
    </div>

    <br className="demo-break" />

    <div className="o-buttons-pagination">
      <a href="#" className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-left o-buttons-icon--icon-only
        ">
        <span className="o-buttons-icon__label">Fewer results</span>
      </a>
      <a href="#" className="o-buttons o-buttons--secondary">1</a>
      <span className="o-buttons-pagination__ellipsis">...</span>
      <a href="#" className="o-buttons o-buttons--secondary">100</a>
      <a href="#" className="o-buttons o-buttons--secondary" aria-current="page">101</a>
      <a href="#" className="o-buttons o-buttons--secondary">102</a>
      <span className="o-buttons-pagination__ellipsis">...</span>
      <a href="#" className="o-buttons o-buttons--secondary">200</a>
      <a href="#" className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-right o-buttons-icon--icon-only
        ">
        <span className="o-buttons-icon__label">More results</span>
      </a>
    </div>
        </div>
    );
}

export default Pagination;