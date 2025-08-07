// DOM কন্টেন্ট লোড হওয়ার পর
document.addEventListener('DOMContentLoaded', function() {
    // ফিচার্ড বই লোড করবে
    loadFeaturedBooks();
    
    // CTA বাটন ইভেন্ট
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            window.location.href = "#";
        });
    }
});

// ফিচার্ড বই লোড করার ফাংশন
function loadFeaturedBooks() {
    const featuredBooksContainer = document.getElementById('featuredBooks');
    
    // Firebase থেকে বই লোড করুন (এখানে স্ট্যাটিক ডাটা ব্যবহার করা হলো)
    const featuredBooks = [
        {
            title: "লাল সালু",
            author: "সৈয়দ ওয়ালীউল্লাহ",
            coverUrl: "https://example.com/lalsalu.jpg"
        },
        {
            title: "হাজার বছর ধরে",
            author: "জহির রায়হান",
            coverUrl: "https://example.com/hazarbachor.jpg"
        },
        {
            title: "কবি",
            author: "রবীন্দ্রনাথ ঠাকুর",
            coverUrl: "https://example.com/kobi.jpg"
        }
    ];
    
    // বই কার্ড তৈরি করুন
    featuredBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <img src="${book.coverUrl}" alt="${book.title}" class="book-cover">
            <div class="book-info">
                <h4 class="book-title">${book.title}</h4>
                <p class="book-author">${book.author}</p>
            </div>
        `;
        featuredBooksContainer.appendChild(bookCard);
    });
          }
