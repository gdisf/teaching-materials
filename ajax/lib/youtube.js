var youtube = {
    
    /**
     * Expects an argument that is either a youtube URL or a ID,
     * and returns back the ID.
     */
    getIdFromUrl: function(videoIdOrUrl) {
        if (videoIdOrUrl.indexOf('http') === 0) {
            return videoIdOrUrl.split('v=')[1];
        } else {
            return videoIdOrUrl;
        }
    },
    
    /**
     * Expects an argument that is either a youtube URL or a ID,
     * and returns back the URL of the thumbnail for that video.
     */
    generateThumbnailUrl: function(videoIdOrUrl) {
        return 'http://i3.ytimg.com/vi/' + youtube.getIdFromUrl(videoIdOrUrl) + '/default.jpg';
    },

    /**
     * Expects an argument that is either a youtube URL or a ID,
     * and returns back the URL for that video.
     */
    generateWatchUrl: function(videoIdOrUrl) {
        return 'https://www.youtube.com/watch?v=' + youtube.getIdFromUrl(videoIdOrUrl);
    },
    
    /**
     * Expects an argument that is either a youtube URL or a ID,
     * and returns back the embed URL for that video.
     */
    generateEmbedUrl: function(videoIdOrUrl) {
        return 'http://www.youtube.com/embed/' + youtube.getIdFromUrl(videoIdOrUrl);
    }

}

