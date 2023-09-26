CREATE TABLE Songs (
    song_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    artist VARCHAR(255),
    video_key VARCHAR(255),
    daily_puzzle BOOLEAN,
    difficulty INT,
    reviewed BOOLEAN,
    unique_chords JSON,
    time_stamps JSON,
    ordered_chords JSON
);

INSERT INTO Songs (title, artist, video_key, daily_puzzle, difficulty, reviewed, unique_chords, time_stamps, ordered_chords)
VALUES ('Nothing has Changed', 'The Polar Boys', 'gc9CtgPnkUg', 1, 0, 0, 
'["A#m7", "G#m7", "F#maj7", "F#add9", "C#maj7", "F7", "C#", "F#", "A#m", "B", "G#", "Fm7", "C#7", "G#sus4", "N"]',
'[0.59, 2.24, 3.9, 5.55, 8.86, 10.52, 12.17, 13.83, 15.49, 17.14, 18.79, 20.45, 23.76, 27.07, 30.38, 33.69, 37, 40.31, 43.62, 46.93, 50.24, 53.55, 54.38, 56.87, 60.17, 63.49, 66.8, 68.45, 70.11, 71.76, 72.59, 73.41, 76.73, 80.04, 81.69, 83.35, 85, 86.66, 89.97, 93.28, 96.59, 99.9, 103.21, 106.52, 107.35, 109.83, 113.14, 116.45, 119.73, 121.42, 123.07, 124.73, 126.38, 129.69, 133, 134.66, 136.31, 137.96, 139.62, 142.94, 146.24, 147.9, 149.55, 151.21, 152.87, 156.18, 159.49, 161.14, 162.79, 164.45, 166.11, 169.41, 172.73, 174.38, 176.04, 176.87, 177.7, 179.34, 182.66, 185.97, 187.62, 189.28, 190.93, 192.59, 195.9, 199.23, 203.4]',
'["A#m7", "G#m7", "F#maj7", "A#m7", "G#m7", "F#maj7", "F#add9", "C#maj7", "F7", "A#m7", "G#m7", "F#maj7", "F#add9", "C#", "F#", "C#", "F#", "C#", "F#", "C#", "F#", "C#", "C#maj7", "F#maj7", "C#maj7", "F#maj7", "C#maj7", "F7", "A#m", "B", "C#", "F#maj7", "G#", "C#", "F7", "A#m", "B", "F#", "G#", "C#", "F#", "C#", "F#", "C#", "C#maj7", "F#", "C#maj7", "F#maj7", "C#maj7", "Fm7", "A#m7", "G#m7", "F#maj7", "A#m7", "C#maj7", "Fm7", "A#m7", "G#m7", "F#maj7", "A#m7", "C#", "F7", "A#m7", "C#7", "F#maj7", "G#sus4", "C#", "F7", "A#m", "C#7", "F#", "G#", "C#", "F7", "A#m", "C#", "C#7", "F#maj7", "G#", "C#", "F7", "A#m", "C#7", "F#maj7", "G#", "C#maj7", "N"]');