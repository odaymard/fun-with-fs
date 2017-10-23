# fun-with-fs

In index.js, require the fs module and use its readdir method to get a list of items contained in the files directory and log it to the console. Then use the stat method on each item to determine if it is a directory ( by using the isDirectory method of the Stats instance passed to the callback you pass to stat). Log the contents of each directory recursively .

