param(
  [Parameter(Mandatory=$true)][string]$Title,
  [Parameter(Mandatory=$true)][string]$Slug,
  [Parameter(Mandatory=$true)][string]$Category,
  [Parameter(Mandatory=$true)][string]$Image,
  [Parameter(Mandatory=$true)][string]$Spotify,
  [Parameter(Mandatory=$true)][string]$YouTube,
  [string]$YouTubeEmbed = "",
  [string]$SpotifyEmbed = ""
)
$path = Join-Path $PSScriptRoot "..\data\will-talks-episodes.json"
$data = Get-Content -Raw $path | ConvertFrom-Json
$episode = [pscustomobject]@{ slug=$Slug; title=$Title; category=$Category; image=$Image; spotify=$Spotify; youtube=$YouTube; youtube_embed=$YouTubeEmbed; spotify_embed=$SpotifyEmbed }
$data.episodes = @($episode) + @($data.episodes)
$data | ConvertTo-Json -Depth 8 | Set-Content -Encoding utf8 $path
Write-Output "Added '$Title' to the top of will-talks-episodes.json"
