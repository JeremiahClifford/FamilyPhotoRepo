i=0
cd ../Server/Comments
for filename in *; do
    i=$((i+1))
    rm ../../MainData/$i/comments.json
    cp "$filename" ../../MainData/$i/comments.json
done