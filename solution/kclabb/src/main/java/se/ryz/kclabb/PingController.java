package se.ryz.kclabb;

import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.logging.Logger;

@RestController
public class PingController {
    private static final Logger logger = Logger.getLogger(PingController.class.getName());

    @GetMapping("/ping")
    @Secured("ROLE_testrole")
    ReplyMessage ping(Principal principal, HttpServletResponse response) {
        logger.info("");
        logger.info("====================================");
        logger.info("Ping received from " + principal.getName());
        logger.info("====================================");
        logger.info("");
        response.setStatus(HttpServletResponse.SC_OK);
        return new ReplyMessage("Pong from secured service");

    }

    private class ReplyMessage {
        private String message;
        public ReplyMessage(String message) {
            this.message = message;
        }
        public String getMessage() {
            return message;
        }
   }
}
