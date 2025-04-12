## Character randomizer for Identity V

Randomizer for the game Identity V. I'm not affiliated with the company.

Deployed at: https://identity-v-randomizer.vercel.app/

To add a character, use the endpoint /api/character with the following POST request:<br>
headers: ``api-secret``<br>
body:<br>
```
{
"category": "hunters",
"name": "Test",
"nickname": "test",
"img": "img",
"duo": false
}
```

Category can only be `hunters` or `survivors`.

Similar for deleting a character, but only category and nickname will be necessary in the body.