



if __name__ == "__main__":


# '''abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;':\",./<>?'''


	import requests
	import base64

	# Replace with your own app credentials
	CLIENT_ID = "d4f7f0df31d74a52906b57b683c7ab0f"
	CLIENT_SECRET = "d289eb03d20a4a0e909980e6964234c7"

	# # Authenticate your app and get an access token
	auth_url = "https://accounts.spotify.com/api/token"
	auth_header = base64.b64encode(f"{CLIENT_ID}:{CLIENT_SECRET}".encode("ascii")).decode("ascii")
	auth_data = {"grant_type": "client_credentials"}
	auth_response = requests.post(auth_url, headers={"Authorization": f"Basic {auth_header}"}, data=auth_data)
	access_token = auth_response.json()["access_token"]

	# # Use the access token to search for a song
	# query = "shape of you"
	# search_url = f"https://api.spotify.com/v1/search?q={query}&type=track"
	# search_response = requests.get(search_url, headers={"Authorization": f"Bearer {access_token}"})
	# search_results = search_response.json()["tracks"]["items"]

	# # Print the first result
	# if search_results:
	# 	first_result = search_results[0]
	# 	print(f"Name: {first_result['name']}")
	# 	print(f"Artist: {first_result['artists'][0]['name']}")
	# 	print(f"Preview URL: {first_result['preview_url']}")
	# else:
	# 	print("No results found.")



	# Send a GET request to the currently playing endpoint
	current_url = f"https://api.spotify.com/v1/me/player/currently-playing"
	current_response = requests.get(current_url, headers={"Authorization": f"Bearer {access_token}"}, params={"market": "from_token"})

	# Print the first result
	if current_response:
		first_result = current_response[0]
		print(f"Name: {first_result['name']}")
		print(f"Artist: {first_result['artists'][0]['name']}")
		print(f"Preview URL: {first_result['preview_url']}")
	else:
		print("No results found.")
		print(current_response.text)

	