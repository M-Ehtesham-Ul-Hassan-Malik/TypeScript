function make_album(artist: string, title: string, track?: number) {
    let album = { artist, title } as { artist: string; title: string; track?: number };

    if (track !== undefined) {
        album.track = track; // Assign track to album if provided
    }

    return album;
}

// Function calls
console.log(make_album("First Artist", "The First Album"));
console.log(make_album("Second Artist", "The Second Album"));
console.log(make_album("Last Artist", "The Last Album", 33));
