# Team Data

This folder contains the team member data for the Heroes Of The Sea website.

## Editing Team Members

Edit `team.json` to add, remove, or update team members.

### JSON Structure

```json
[
  {
    "id": "unique-id",
    "name": "Member Name",
    "pronouns": "they/them",
    "role": {
      "en": "Role in English",
      "pt": "Função em Português"
    },
    "description": "A brief description of the member's responsibilities and achievements.",
    "image": "/team/member-photo.jpg"
  }
]
```

### Fields

- **id**: Unique identifier for the team member (string)
- **name**: Full name of the team member
- **pronouns**: Preferred pronouns (optional, e.g., "he/him", "she/her", "they/them")
- **role**: Object with English and Portuguese translations of their role
- **description**: Brief description of the member (English only, shown when clicking on member card)
- **image**: Path to the member's profile picture (relative to public folder)

### Adding Profile Pictures

1. Place profile pictures in `/public/team/` folder
2. Recommended size: 200x200px or larger (square)
3. Supported formats: JPG, PNG, WebP
4. Use descriptive filenames: `firstname-lastname.jpg`

### Interactive Team Cards

- Click on any team member card to view more details
- A modal popup will display their full profile including description
- Press ESC or click outside to close the modal

### Example Roles

**English:**
- Team Captain
- Head of Programming
- Mechanical Lead
- Designer
- Builder
- Driver
- Scout
- Outreach Coordinator

**Portuguese:**
- Capitão de Equipa
- Chefe de Programação
- Líder Mecânico
- Designer
- Construtor
- Piloto
- Explorador
- Coordenador de Divulgação
