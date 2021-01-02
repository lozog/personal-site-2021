import sys, getopt, os, json

# usage: python gallery_helper.py <directory>

def main(argv):
    opts, args = getopt.getopt(argv, "")
    print(args)
    directory = args[0]
    images_list = []

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