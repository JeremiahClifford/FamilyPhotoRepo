i=0
rm ../Client/Images/*
rm ../Server/Comments/*
cd ../MainData
for filename in *; do
    i=$((i+1))
    cp "./$i/img.jpg" ../Client/Images/$i.jpg
    cp "./$i/comments.json" ../Server/Comments/$i.json
done