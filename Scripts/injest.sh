i=0
cd ../MainData
for filename in *; do
    if [ "$filename" = "*" ]; then
        echo $filename
    else
        i=$((i+1))
    fi
done
echo $i
cd ../PhotoInjest
for filename in *.jpg; do
    i=$((i+1))
    mkdir ../MainData/$i
    cp "../Templates/emptyComments.json" ../MainData/$i/comments.json
    cp "$filename" ../MainData/$i/img.jpg
done
rm *
