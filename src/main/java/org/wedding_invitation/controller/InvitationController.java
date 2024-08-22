package org.wedding_invitation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class InvitationController {

    @GetMapping("/")
    public String index() {
        return "index";
    }
}
