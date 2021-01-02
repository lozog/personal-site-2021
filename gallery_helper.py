import sys, getopt, os, json
from subprocess import call

# Given a directory, mogrify all jpgs into thumbnail gifs in /thumbs
# then print out a json array for use in galleries.js

# usage: python gallery_helper.py <directory>

# TODO: use 80% quality 1500x1500 jpgs for full-size
# TODO: use 50% quality 700x700 gifs for thumbnails
# TODO: you might not even need thumbnails tbh, we're already at ~400-500kb per full size

def main(argv):
    opts, args = getopt.getopt(argv, "")
    print(args)
    directory = args[0]
    images_list = []
    call(["mkdir", f"{directory}/thumbs"])
    call(["mogrify", "-format", "gif", "-path", f"{directory}/thumbs", "-thumbnail", "700x700", f"{directory}/*.jpg"])

    for filename in os.listdir(directory):
        if filename.endswith(".jpg"): 
            images_list.append({
                "filename": filename,
                "thumbnail": filename.replace("jpg", "gif")
            })
        else:
            continue
    
    print(json.dumps(images_list))

if __name__ == "__main__":
   main(sys.argv[1:])