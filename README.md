# resume
My personal resume. Uses `jsonresume` to generate a nicely formatted resume in html & pdf. The final resume is hosted at [ghpages](https://stevejkcode.github.io/resume.html).

## Theme
I wasn't completely happy with how any of the themes rendered, but [spartan](https://github.com/phoinixi/jsonresume-theme-spartan) got the closest. I ended up forking it to make [my own modified theme](https://github.com/stevejkcode/jsonresume-theme-stevean).

## Setup
clone the repo
```
git clone https://github.com/stevejkcode/resume.git
cd resume
```

install the dependencies
```
npm install
```

generate the resume files using the provided generate script *note* this only currently works when run from the root directory
```
scripts/generate.sh
```

## PDF
Currently the pdf setup does not format the file in a way I'm happy with. As an alternative, use chrome directly by opening the html file in chrome, selecting print and then setting the destination as "Save as PDF". In the more settings panel set the paper size as 'Legal' and disable headers and footers. Then the pdf can be exported and used to replace the resume.pdf file in the main repo. 