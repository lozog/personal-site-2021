import sys, getopt, os, json
from subprocess import call

# Given a directory, mogrify all jpgs into thumbnail gifs in /thumbs
# then print out a json array for use in galleries.js

# usage: python gallery_helper.py <opts> <directory>

def main(argv):
    try:
        opts, args = getopt.getopt(argv, "n", "no-mogrify")
    except getopt.GetoptError as err:
        # print help information and exit:
        print(err)  # will print something like "option -a not recognized"
        print("usage: python3 gallery_helper.py <opts> <directory>")
        sys.exit(2)

    directory = args[0]
    shouldMogrify = True

    for o, a in opts:
        if o in ["-n", "--no-mogrify"]:
            shouldMogrify = False

    if shouldMogrify:
        print("WARNING: This is a destructive operation, files will be overwritten")
        call(["mogrify", "-format", "jpg", "-thumbnail", "1500x1500", "-quality", "80", f"{directory}/*.jpg"])

    images_list = []
    for filename in os.listdir(directory):
        if filename.endswith(".jpg"): 
            images_list.append({
                "filename": filename,
            })
        else:
            continue
    
    print(json.dumps(images_list))

if __name__ == "__main__":
   main(sys.argv[1:])