# Download and install ImageMagick silently (x64)
$uri = 'https://github.com/ImageMagick/ImageMagick/releases/download/7.1.2-24/ImageMagick-7.1.2-24-Q16-HDRI-x64-dll.exe'
$dest = "$env:TEMP\ImageMagick-7.1.2-24-x64.exe"
Write-Host "Downloading ImageMagick to $dest"
Invoke-WebRequest -Uri $uri -OutFile $dest
Write-Host "Running installer (may prompt for admin). Install path: C:\Program Files\ImageMagick-7.1.2-Q16-HDRI"
Start-Process -FilePath $dest -ArgumentList "/verysilent","/norestart" -Wait -Verb RunAs
Write-Host 'Installation abgeschlossen. Bitte PowerShell neu starten und `magick -version` prüfen.'
