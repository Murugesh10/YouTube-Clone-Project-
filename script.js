var menuicon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var maincontainer = document.querySelector(".maincontainer");
var card = document.querySelectorAll(".card");

console.log("meniicon",menuicon);



menuicon.onclick = function(){
    sidebar.classList.toggle("smaller-sidebar");
    maincontainer.classList.toggle("larger-maincontainer");
     // Toggle class for all cards
     card.forEach(function(card) {
        card.classList.toggle("larger-card");
    });

    console.log("menu-icon clicked");
    console.log("card toggled");
}

document.addEventListener('DOMContentLoaded', function() {
    var commentInput = document.getElementById('commentInput');
    var commentsContainer = document.getElementById('commentsContainer');
    var commentCountElement = document.getElementById('commentCounts');
    var commentCounts = 0; // initial comment count

    // Function to update the comment count display
    function updateCommentCount() {
        if (commentCountElement) {
            commentCountElement.textContent = `${commentCounts} Comments`;
        }
    }

    if (commentInput) {
        commentInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && commentInput.value.trim() !== '') {
                // Prevent the default action (form submission if inside a form)
                event.preventDefault();

                // Create a new comment element
                var newComment = document.createElement('div');
                newComment.className = 'previousComments d-flex';
                newComment.innerHTML = `
                    <img class="userimg" src="images/channels4_profile.jpg" alt="">
                    <div class="nameAndComment">
                        <p class="ChannelName">@Murugesh</p>
                        <p>${commentInput.value.trim()}</p>
                    </div>
                `;

                // Append the new comment to the comments container
                if (commentsContainer) {
                    commentsContainer.appendChild(newComment);
                }

                // Clear the input field
                commentInput.value = '';

                // Increment the comment count and update the display
                commentCounts++;
                updateCommentCount();
            }
        });
    }

    // Initial update of the comment count display
    updateCommentCount();

    // Check if we are on the video page
    if (window.location.pathname.endsWith('video.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const videoUrl = urlParams.get('video');
        
        if (videoUrl) {
            const videoPlayer = document.getElementById('videoPlayer');
            if (videoPlayer) {
                videoPlayer.src = videoUrl;
            }
        }
    }

    // Add event listener to cards on index.html to set the video URL in the query parameter
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const videoUrl = card.getAttribute('data-video-url');
            window.location.href = `video.html?video=${encodeURIComponent(videoUrl)}`;
        });
    });
});

