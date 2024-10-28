import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  worldTop = [
    { title: 'Paint The Town Red', artist: 'Ejemplo', imageUrl: 'https://i.ytimg.com/vi/m4_9TFeMfJE/maxresdefault.jpg' },
    { title: 'Cruel Summer', artist: 'Ejemplo', imageUrl: 'https://i1.sndcdn.com/artworks-hW7SxyFUmTM83zni-aMxGzQ-t500x500.jpg' },
    { title: 'I Remember Everything (feat. Kacey Musgraves)', artist: 'Ejemplo', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeXe3syMZSBXYUE70sR2WnyyRaSqMMbeL9Aw&s' },
    { title: 'What Was I Made For?', artist: 'Ejemplo', imageUrl: 'https://www.billboard.com/wp-content/uploads/2023/12/Billie-Eilish-What-Was-I-Made-For-mv-still-2023-billboard-1548.jpg' },
    { title: 'Rara vez', artist: 'Ejemplo', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrFgCCb7hbRQoAPm8IyRGG572Urd4-99qESw&s' },
    { title: 'Red Hot Chilli Peppers', artist: 'Ejemplo', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kvblU_qcA_3u1yN1J-yIhc6KGAWNVHpluQ&s' }
  ];


  popularArtists = [
    { title: 'EJEMPLO', artist: 'Milo j', imageUrl: 'https://yt3.googleusercontent.com/DsqLhK_MXcm5cN3tX14NDKZ4dJuLG1CeASkovaRMOs4KqWwGTXgWg_caDrnnUJMb4p7wunsB=s900-c-k-c0x00ffffff-no-rj' },
    { title: 'EJEMPLO', artist: 'Travis Scott', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIf4LPJWrvzwnVs_EHovlv1sycguMODvEbsw&s' },
    { title: 'EJEMPLO', artist: 'Bizarrap', imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb14add0d3419426b84158b913' },
    { title: 'EJEMPLO', artist: 'Duki', imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb731bcc0d0f1323fbf91c5719' },
    { title: 'EJEMPLO', artist: 'Cancerbero', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbBoNXe8NAoUAgShy8UELxwWnQR0k1jIUQVw&s' },
    { title: 'EJEMPLO', artist: 'Drake', imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9' },
  ];
}