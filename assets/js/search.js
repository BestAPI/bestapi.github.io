// Search functionality
document.addEventListener('DOMContentLoaded', () => {
  const searchData = [];
  
  // Only load search data if we're on the search page
  if (window.location.pathname.includes('/search')) {
    fetch('/search-data.json')
      .then(response => response.json())
      .then(data => {
        searchData.push(...data);
        // Check if there's a query parameter in the URL
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('q');
        
        if (query) {
          document.getElementById('search-input').value = query;
          performSearch(query);
        }
      })
      .catch(error => console.error('Error loading search data:', error));
      
    // Add event listener to search form
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = document.getElementById('search-input').value.trim();
        
        if (query) {
          performSearch(query);
          
          // Update URL with search query
          const url = new URL(window.location);
          url.searchParams.set('q', query);
          window.history.pushState({}, '', url);
        }
      });
    }
  }
  
  function performSearch(query) {
    const resultsContainer = document.getElementById('search-results');
    const resultsCount = document.getElementById('results-count');
    
    if (!resultsContainer || !resultsCount) return;
    
    // Clear previous results
    resultsContainer.innerHTML = '';
    
    if (!query) {
      resultsCount.textContent = 'Please enter a search term';
      return;
    }
    
    // Convert to lowercase for case-insensitive search
    const normalizedQuery = query.toLowerCase();
    
    // Filter results
    const results = searchData.filter(item => {
      return (
        item.title.toLowerCase().includes(normalizedQuery) || 
        item.content.toLowerCase().includes(normalizedQuery) || 
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))) ||
        (item.category && item.category.toLowerCase().includes(normalizedQuery))
      );
    });
    
    // Update results count
    resultsCount.textContent = `Found ${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`;
    
    // Display results
    if (results.length > 0) {
      results.forEach(item => {
        const resultCard = document.createElement('div');
        resultCard.className = 'search-result-card';
        
        let tagsHtml = '';
        if (item.tags && item.tags.length > 0) {
          tagsHtml = `
            <div class="result-tags">
              ${item.tags.slice(0, 3).map(tag => `<span class="result-tag">${tag}</span>`).join('')}
            </div>
          `;
        }
        
        resultCard.innerHTML = `
          <h3 class="result-title"><a href="${item.url}">${item.title}</a></h3>
          ${item.category ? `<span class="result-category">${item.category}</span>` : ''}
          <p class="result-excerpt">${highlightText(item.content, normalizedQuery)}</p>
          ${tagsHtml}
        `;
        
        resultsContainer.appendChild(resultCard);
      });
    } else {
      resultsContainer.innerHTML = `
        <div class="no-results">
          <p>No results found for "${query}".</p>
          <p>Try a different search term or browse by <a href="/categories/">categories</a> or <a href="/tags/">tags</a>.</p>
        </div>
      `;
    }
  }
  
  // Function to highlight search term in text
  function highlightText(text, query) {
    const words = query.split(' ').filter(word => word.length > 0);
    
    // Find a relevant excerpt
    const maxLength = 200;
    let excerpt = text;
    
    // Try to find a relevant excerpt containing the query
    if (text.length > maxLength) {
      // Find the first occurrence of any search word
      let lowestIndex = text.length;
      
      for (const word of words) {
        const index = text.toLowerCase().indexOf(word);
        if (index !== -1 && index < lowestIndex) {
          lowestIndex = index;
        }
      }
      
      // Get excerpt around the first match
      const start = Math.max(0, lowestIndex - 100);
      excerpt = text.substr(start, maxLength);
      
      // Add ellipsis if we're not starting from the beginning
      if (start > 0) {
        excerpt = '...' + excerpt;
      }
      
      // Add ellipsis if we're not ending at the end
      if (start + maxLength < text.length) {
        excerpt = excerpt + '...';
      }
    }
    
    // Highlight all occurrences of the search words
    for (const word of words) {
      if (word.length < 3) continue; // Skip short words
      
      const regex = new RegExp('(' + word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      excerpt = excerpt.replace(regex, '<mark>$1</mark>');
    }
    
    return excerpt;
  }
});