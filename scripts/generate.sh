# Generate HTML resume
resume export resume.html --theme stevean --resume resume.json

# Use sed to replace html escapes (in the patent link) which prevent that link from rendering correctly
cat resume.html | sed 's/&lt;/</g' | sed 's/href&#x3D;&#x27;/href="/g' | sed 's/&#x27;&gt;/">/g' | sed 's/&gt;/>/g' > resume_no_escape.html

# Replace the main resume file with the no escape version
mv resume_no_escape.html resume.html

# Generate the pdf version
# note that for now this is just running the pdf.js file within this folder which doesn't produce 
# a pdf formatted the way I really want. In future I'll maybe try to fix this but it's not really worth
# the effort right now
node scripts/pdf.js