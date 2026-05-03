# tiktok-repostdeletion

removes all reposts (videos and photos) from your tiktok account.
runs in the browser console, no install needed.

## how to use

1. open tiktok.com and login
2. go to your profile and click the **Reposts** tab
3. scroll all the way down so all your reposts are loaded
4. open devtools (F12) and go to the **Network** tab
5. unrepost any one video by hand (open it, click the repost button)
6. in network tab find the request to `upvote/delete`, right click, copy, copy URL
7. open `unrepost.js`, paste that url into `URL`, then in the url replace the number after `item_id=` with `ITEM_ID`
8. open the **Console** tab, paste the whole script, press enter
9. wait until it logs `done`

if some reposts stay, refresh the page, scroll down again and run it once more.

## notes

- you must be logged in
- run on `tiktok.com`, not on a video page
- 300ms delay between requests so tiktok doesnt rate limit you
